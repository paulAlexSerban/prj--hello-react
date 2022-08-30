import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
      <Card className="expenses">
        <ExpenseItem 
          title={props.items[0].title} 
          amount={props.items[0].amount} 
          date={props.items[0].date}>
        </ExpenseItem>
      </Card>
  );
}

export default Expenses;
