import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';

const ReminderScreen = () => {
  const [reminderText, setReminderText] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [reminderDate, setReminderDate] = useState<Date | null>(null);

  const handleDateConfirm = (date: Date) => {
    setReminderDate(date);
    setShowDatePicker(false);
  };

  const handleReminderSave = () => {
    if (!reminderText || !reminderDate) {
      alert('Please enter a reminder text and date!');
      return;
    }

    // TODO: Save the reminder to a database or perform any other necessary actions
    alert(`Reminder saved: ${reminderText}\nDate: ${format(reminderDate, 'MM/dd/yyyy HH:mm')}`);
    
    // Reset the form
    setReminderText('');
    setReminderDate(null);
  };

  return (
    <View>
      <Text>Reminder Text:</Text>
      <TextInput
        value={reminderText}
        onChangeText={setReminderText}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
      {reminderDate && <Text>Selected Date: {format(reminderDate, 'MM/dd/yyyy HH:mm')}</Text>}
      <Button title="Save Reminder" onPress={handleReminderSave} />

      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="datetime"
        onConfirm={handleDateConfirm}
        onCancel={() => setShowDatePicker(false)}
      />
    </View>
  );
};

export default ReminderScreen;
