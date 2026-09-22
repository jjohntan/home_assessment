transaction = [
    {"id": 1, "amount": 50.00, "status": "completed"},
    {"id": 2, "amount": 120.50, "status": "refunded"},
    {"id": 3, "amount": 75.25, "status": "completed"},
    {"id": 4, "amount": 15.00, "status": "pending"}
]

function data_aggregation(records) {
    return records
    .filter(record => record.status === "completed")
    .reduce((total, record) => total + record.amount, 0);
}

console.log(data_aggregation(transaction));