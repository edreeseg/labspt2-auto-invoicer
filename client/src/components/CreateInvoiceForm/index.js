import React, { Component } from "react";

//import sub-components
import AddLogo from "../reusableComponents/AddLogo";
import SingleInput from "../reusableComponents/SingleInput";
import TextArea from "../reusableComponents/TextArea";
import Select from "../reusableComponents/Select";

// InvoiceItemInput
import InvoiceItemInput from "../InvoiceItemsInput";

//CSS
import "./CreateInvoiceForm.css";

export default class index extends Component {
  //State from sub-components held here
  constructor() {
    super();
    this.state = {
      invoiceNumber: "",
      addressFrom: "",
      addressTo: "",
      invoiceDueOptions: ["after 30 days", "after 45 days"],
      invoiceDueSelection: "",
      languageOptions: ["English (US)", "Español"],
      languageSelection: "",
      currencyOptions: [
        "US Dollar (USD)",
        "Euro (EUR)",
        "Sterling Pound (GBP)",
        "Chinese Renminbi (CNH)",
        "Japanese Yen (JPY)",
        "Thai Baht (THB)"
      ],
      currencySelection: "",
      date: "",
      balanceDue: "",
      invoiceNotes: "",
      invoiceTerms: "",
      invoiceItems: [{ item: "", quantity: "", rate: "", amount: "" }],
      subtotal: "",
      discount: "",
      tax: "",
      shipping: "",
      total: "",
      amountPaid: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInvoiceNumberChange = this.handleInvoiceNumberChange.bind(this);
    this.handleAddressFromChange = this.handleAddressFromChange.bind(this);
    this.handleAddressToChange = this.handleAddressToChange.bind(this);
    this.handleInvoiceDueSelectionChange = this.handleInvoiceDueSelectionChange.bind(
      this
    );
    this.handleLanguageSelectionChange = this.handleLanguageSelectionChange.bind(
      this
    );
    this.handleCurrencySelectionChange = this.handleCurrencySelectionChange.bind(
      this
    );
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleBalanceDueChange = this.handleBalanceDueChange.bind(this);
    this.handleInvoiceNotesChange = this.handleInvoiceNotesChange.bind(this);
    this.handleInvoiceTermsChange = this.handleInvoiceTermsChange.bind(this);
    this.handleSubtotalChange = this.handleSubtotalChange.bind(this);
    this.handleDiscountChange = this.handleDiscountChange.bind(this);
    this.handleTaxChange = this.handleTaxChange.bind(this);
    this.handleShippingChange = this.handleShippingChange.bind(this);
    this.handleTotalChange = this.handleTotalChange.bind(this);
    this.handleAmountPaidChange = this.handleAmountPaidChange.bind(this);
  }

  //individual invoice items
  handleInvoiceNumberChange(e) {
    this.setState({ invoiceNumber: e.target.value });
  }

  handleAddressFromChange(e) {
    this.setState({ addressFrom: e.target.value });
  }

  handleAddressToChange(e) {
    this.setState({ addressTo: e.target.value });
  }

  handleInvoiceDueSelectionChange(e) {
    this.setState({ invoiceDueSelection: e.target.value });
  }

  handleLanguageSelectionChange(e) {
    this.setState({ languageSelection: e.target.value });
  }

  handleCurrencySelectionChange(e) {
    this.setState({ currencySelection: e.target.value });
  }

  handleDateChange(e) {
    this.setState({ date: e.target.value });
  }

  handleBalanceDueChange(e) {
    this.setState({ balanceDue: e.target.value });
  }

  handleInvoiceNotesChange(e) {
    this.setState({ invoiceNotes: e.target.value });
  }

  handleInvoiceTermsChange(e) {
    this.setState({ invoiceTerms: e.target.value });
  }

  handleSubtotalChange(e) {
    this.setState({ subtotal: e.target.value });
  }

  handleDiscountChange(e) {
    this.setState({ discount: e.target.value });
  }

  handleTaxChange(e) {
    this.setState({ tax: e.target.value });
  }

  handleShippingChange(e) {
    this.setState({ shipping: e.target.value });
  }

  handleTotalChange(e) {
    this.setState({ total: e.target.value });
  }

  handleAmountPaidChange(e) {
    this.setState({ amountPaid: e.target.value });
  }

  //invoiceItems
  handleInvoiceItemsInputChange = e => {
    if (["item", "quantity", "rate", "amount"].includes(e.target.className)) {
      let invoiceItems = [...this.state.invoiceItems];
      invoiceItems[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ invoiceItems }, () =>
        console.log(this.state.invoiceItems)
      );
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };

  addInvoiceItem = e => {
    e.preventDefault();
    this.setState(prevState => ({
      invoiceItems: [
        ...prevState.invoiceItems,
        { item: "", quantity: "", rate: "", amount: "" }
      ]
    }));
    console.log(this.state.invoiceItems);
  };

  //submission - Clear Form
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      invoiceNumber: "",
      addressFrom: " ",
      addressTo: " ",
      invoiceDueSelection: "",
      languageSelection: "",
      currencySelection: "",
      date: "",
      balanceDue: "",
      invoiceNotes: "",
      invoiceTerms: "",
      invoiceItems: [{ item: "", quantity: "", rate: "", amount: "" }],
      subtotal: "",
      discount: "",
      tax: "",
      shipping: "",
      total: "",
      amountPaid: ""
    });
    console.log(this.state.invoiceNumber);
    console.log(this.state.addressFrom);
    console.log(this.state.addressTo);
    console.log(this.state.invoiceDueSelection);
    console.log(this.state.languageSelection);
    console.log(this.state.currencySelection);
    console.log(this.state.date);
    console.log(this.state.balanceDue);
    console.log(this.state.invoiceNotes);
    console.log(this.state.invoiceTerms);
    console.log(this.state.invoiceItems);
    console.log(this.state.subtotal);
    console.log(this.state.discount);
    console.log(this.state.tax);
    console.log(this.state.shipping);
    console.log(this.state.total);
    console.log(this.state.amountPaid);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const formPayload = {
      invoiceNumber: this.state.invoiceNumber,
      addressFrom: this.state.addressFrom,
      addressTo: this.state.addressTo,
      invoiceDueSelection: this.state.invoiceDueSelection,
      languageSelection: this.state.languageSelection,
      currencySelection: this.state.currencySelection,
      date: this.state.date,
      balanceDue: this.state.balanceDue,
      invoiceNotes: this.state.invoiceNotes,
      invoiceTerms: this.state.invoiceTerms,
      invoiceItems: this.state.invoiceItems,
      subtotal: this.state.subtotal,
      discount: this.state.discount,
      tax: this.state.tax,
      shipping: this.state.shipping,
      total: this.state.total,
      amountPaid: this.state.amountPaid
    };

    console.log("Send this in a POST request:", formPayload);
    this.handleClearForm(e);
  }

  render() {
    return (
      <div>
        Create Invoice Form.
        <div className="main-container">
          Main Container
          <section className="top-section">
            <div className="top-section-top">
              <div>*Thank you Message*</div>
              <div>
                <AddLogo />
              </div>
            </div>
            <div className="top-section-bottom">
              <div>
                <form onSubmit={this.handleFormSubmit}>
                  <div>Invoice No.</div>
                  <SingleInput
                    inputType={"text"}
                    //title={"Invoice Number"}
                    name={"name"}
                    controlFunc={this.handleInvoiceNumberChange}
                    content={this.state.invoiceNumber}
                    placeholder={"# Invoice Number"}
                  />
                </form>
              </div>
              <div>
                <form>
                  <div>Language</div>
                  <Select
                    name={"languageRange"}
                    placeholder={"Choose Your Language of Choice"}
                    controlFunc={this.handleLanguageSelectionChange}
                    options={this.state.languageOptions}
                    selectedOption={this.state.languageSelection}
                  />
                </form>
              </div>
              <div>
                <form>
                  <div>Currency</div>
                  <Select
                    name={"currencyRange"}
                    placeholder={"Choose Your Currency"}
                    controlFunc={this.handleCurrencySelectionChange}
                    options={this.state.currencyOptions}
                    selectedOption={this.state.currencySelection}
                  />
                </form>
              </div>
            </div>
          </section>
          <section className="mid-section">
            <div className="mid-section-left">
              <div>
                <form onSubmit={this.handleFormSubmit}>
                  <div>From</div>
                  <TextArea
                    inputType={"text"}
                    //title={"Invoice From"}
                    rows={5}
                    resize={false}
                    name={"name"}
                    controlFunc={this.handleAddressFromChange}
                    placeholder={
                      "Your Business, Inc. \nYour Address \nCity, State/Region, \nYour Country"
                    }
                  />
                </form>
              </div>
              <div>
                <form onSubmit={this.handleFormSubmit}>
                  <div>To</div>
                  <TextArea
                    inputType={"text"}
                    //title={"Invoice To"}
                    rows={5}
                    resize={false}
                    name={"name"}
                    controlFunc={this.handleAddressToChange}
                    placeholder={
                      "Client Business, Inc. \nClient Address \nCity, State/Region, \nClient Country"
                    }
                  />
                </form>
              </div>
            </div>
            <div className="mid-section-right">
              <div>
                <form onSubmit={this.handleFormSubmit}>
                  <div>Date</div>
                  <SingleInput
                    inputType={"text"}
                    //title={"Date"}
                    name={"name"}
                    controlFunc={this.handleDateChange}
                    content={this.state.date}
                    placeholder={"Enter Date"}
                  />
                </form>
              </div>
              <div>
                <form>
                  <div>Invoice Due</div>
                  <Select
                    name={"invoiceDueRange"}
                    placeholder={"Choose Invoice Due Date"}
                    controlFunc={this.handleInvoiceDueSelectionChange}
                    options={this.state.invoiceDueOptions}
                    selectedOption={this.state.invoiceDueSelection}
                  />
                </form>
              </div>
              <div>
                <form onSubmit={this.handleFormSubmit}>
                  <div>Balance Due</div>
                  <SingleInput
                    inputType={"text"}
                    //title={"Balance Due"}
                    name={"name"}
                    controlFunc={this.handleBalanceDueChange}
                    content={this.state.balanceDue}
                    placeholder={"Balance Due"}
                  />
                </form>
              </div>
            </div>
          </section>
          <section className="bottom-section">
            <div className="bottom-section-top">
              <form
                onSubmit={this.handleFormSubmit}
                onChange={this.handleInvoiceItemsInputChange}
              >
                <InvoiceItemInput invoiceItems={this.state.invoiceItems} />
                <button onClick={this.addInvoiceItem}>Add Line Item +</button>
              </form>
            </div>
            <div className="bottom-section-mid">
              <div className="bottom-section-bottom-left">
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Notes</div>
                    <TextArea
                      inputType={"text"}
                      //title={"Invoice Notes"}
                      rows={5}
                      resize={false}
                      name={"name"}
                      controlFunc={this.handleInvoiceNotesChange}
                      placeholder={"Invoice Notes"}
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Terms</div>
                    <TextArea
                      inputType={"text"}
                      //title={"Invoice Terms"}
                      rows={5}
                      resize={false}
                      name={"name"}
                      controlFunc={this.handleInvoiceTermsChange}
                      placeholder={"Invoice Terms"}
                    />
                  </form>
                </div>
              </div>
              <div className="bottom-section-bottom-right">
                <div>
                  <div>Subtotal</div>
                  <form onSubmit={this.handleFormSubmit}>
                    <SingleInput
                      inputType={"text"}
                      //title={"Subtotal"}
                      name={"name"}
                      controlFunc={this.handleSubtotalChange}
                      content={this.state.subtotal}
                      placeholder={"Subtotal"}
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Discount</div>
                    <SingleInput
                      inputType={"integer"}
                      //title={"Discount"}
                      name={"name"}
                      controlFunc={this.handleDiscountChange}
                      content={this.state.discount}
                      placeholder={"Discount"}
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Tax</div>
                    <SingleInput
                      inputType={"integer"}
                      //title={"Tax"}
                      name={"name"}
                      controlFunc={this.handleTaxChange}
                      content={this.state.tax}
                      placeholder={"Tax"}
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Shipping</div>
                    <SingleInput
                      inputType={"integer"}
                      //title={"Shipping"}
                      name={"name"}
                      controlFunc={this.handleShippingChange}
                      content={this.state.shipping}
                      placeholder={"Shipping"}
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Total</div>
                    <SingleInput
                      inputType={"integer"}
                      //title={"Total"}
                      name={"name"}
                      controlFunc={this.handleTotalChange}
                      content={this.state.total}
                      placeholder={"Total"}
                    />
                  </form>
                </div>
                <div>
                  <form onSubmit={this.handleFormSubmit}>
                    <div>Amount Paid</div>
                    <SingleInput
                      inputType={"integer"}
                      //title={"Amount Paid"}
                      name={"name"}
                      controlFunc={this.handleAmountPaidChange}
                      content={this.state.amountPaid}
                      placeholder={"Amount Paid"}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="bottom-section-bottom">
              <div>Email: example@company.com </div>
              <br />
              <div>Phone: +1-555-555-5555</div>
            </div>
          </section>
          <button
            className="btn btn-link float-left"
            onClick={this.handleClearForm}
          >
            Generate
          </button>
          <footer className="footer">Footer</footer>
        </div>
      </div>
    );
  }
}
