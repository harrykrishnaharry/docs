# List management
Source: https://loops.so/docs/contacts/mailing-lists

Organise contacts and offer a subscriber preference center with mailing lists.

Lists are the preferred way of managing your contacts in Loops.

In addition to providing fine-grained control over your audience, using Lists will automatically generate a branded Preference Center for contacts in your audience, allowing them to easily manage their subscription preferences.

Lists can be public or private and contacts can belong to many, one, or no lists.

<Tip>
  Lists are an optional feature. You can use Loops without lists but if you'd
  like finer-grained control over your contacts and the types of communication
  they receive, lists are available on any plan tier.
</Tip>

## List visibility

Each list you create can be Public or Private.

By default lists are private, meaning they are only shown to their subscribed contacts (non-subscribers won't be able to see or subscribe to private lists in the Preference Center).

If you want to allow general opt-in to a list, you can set the list visibility to `Public`. Public lists will be shown to all contacts in the Preference Center.

You can also sign up new subscribers to public lists with [Forms](/forms).

<Note>
  Both private and public lists are visible within your Loops admin and can be
  used for filtering contacts when sending campaigns and loops.
</Note>

## Preference Center

The Preference Center allows your contacts to manage their own subscription preferences.

![Preference Center](https://mintlify.s3.us-west-1.amazonaws.com/loops/images/mailing-lists/preference-center.png)

A link to the contact-specific Preference Center is automatically added to each marketing email sent from Loops. You can link to the Preference Center in MJML emails by using the `{unsubscribe_link}` [dynamic tag](/creating-emails/personalizing-emails#dynamic-tag-syntax).

You can upload a company icon to brand your Preference Center. This option is shown just below your mailing lists in the [Lists settings page](https://app.loops.so/settings?page=lists).

<Tip>
  You can brand your unsubscribe page with a company icon even if you do not use
  the lists features.
</Tip>

Within the Preference Center, contacts will see:

* your company icon (if uploaded)
* the names and descriptions of all public lists
* the names and descriptions of all private lists they are subscribed to
* the option to unsubscribe from each list they are subscribed to

## Create a list

Go to [Settings -> Lists](https://app.loops.so/settings?page=lists).

<Steps>
  <Step title="Create">
    Click on the **Create a list** button.

    ![Create a new list](https://mintlify.s3.us-west-1.amazonaws.com/loops/images/mailing-lists/create-list.png)

    A new mailing list will appear. Enter a name for your list and optionally, a description.

    You can also choose a color to easily identify the list inside your Loops account.
  </Step>

  <Step title="Set visibility">
    ![Visibility toggle](https://mintlify.s3.us-west-1.amazonaws.com/loops/images/mailing-lists/lists-toggle.png)
    Choose between `Private` or `Public` ([see above](#list-visibility)).
  </Step>

  <Step title="Save">
    Click **Save changes** to finalize the creation of the list.
  </Step>
</Steps>

## Edit a list

To edit an existing list, go to [Settings -> Lists](https://app.loops.so/settings?page=lists).

Edit the name, description, visibility and color.

Click **Save changes** to apply the changes.

<Note>
  After saving your changes, the updated list data will be instantly available
  to your contacts in their Preference Centers.
</Note>

## Utilizing lists

Here are a few ways you can use lists to send emails and organise contacts.

### Trigger a loop when a contact is added to a list

This example is a typical use case of sending an email sequence to new contacts when they are added to a specific list.

<Steps>
  <Step title="Choose a loop">
    [Create a loop](/loop-builder) or edit an existing one.
  </Step>

  <Step title="Set the trigger">
    Set the Loop trigger to "Contact added to list". ![Select
    trigger](https://mintlify.s3.us-west-1.amazonaws.com/loops/images/mailing-lists/set-trigger.png)
  </Step>

  <Step title="Select the list">
    Select the list you want to trigger the loop. ![Select the
    list](https://mintlify.s3.us-west-1.amazonaws.com/loops/images/mailing-lists/select-list.png)
  </Step>

  <Step title="Start the loop">
    Start the loop. When a contact is added to the selected list, the loop will
    be triggered.
  </Step>
</Steps>

### Send campaigns to a list

Instead of sending campaigns to your whole audience, you can send emails to a specific list.

<Steps>
  <Step title="Choose a campaign">
    [Create a campaign](https://app.loops.so/campaigns) or edit an existing one.
  </Step>

  <Step title="Select the list">
    On the [Audience page](https://app.loops.so/audience), select the list you want to send to.

    ![Select a mailing list](https://mintlify.s3.us-west-1.amazonaws.com/loops/images/mailing-lists/campaign-list.png)

    Users not subscribed to the selected list will not receive the campaign.
  </Step>

  <Step title="Apply additional filters">
    Optionally, you can apply additional [filters or segments](/contacts/filters-segments) to further refine your audience.
  </Step>
</Steps>

### Manually add contacts to lists

How to add existing contacts to your different mailing lists within Loops.

<Warning>
  You cannot edit the list subscriptions of contacts who have been unsubscribed
  from your audience. Likewise, if a contact unsubscribes from a list via the
  Preference Center, they cannot be resubscribed by your team.
</Warning>

#### Individual contacts

<Steps>
  <Step title="Go to Contacts">
    Go to your [Audience page](https://app.loops.so/audience).
  </Step>

  <Step title="Select a contact">Click on the contact you want to manage.</Step>

  <Step title="Manage subscriptions">
    In the contact details page, click on **Subscribed** to reveal the mailing
    list dropdown.
    ![Manage subscriptions](https://mintlify.s3.us-west-1.amazonaws.com/loops/images/mailing-lists/manage-contact-subscriptions.png)
    Toggle each list on or off as needed. Click **Save changes** in the top
    right to apply the changes.
  </Step>
</Steps>

#### Bulk contacts

You can easily add any filtered group of contacts to a specific list on the Audience page.

<Steps>
  <Step title="Go to Audience">
    Go to your [Audience page](https://app.loops.so/audience).
  </Step>

  <Step title="Filter your audience">
    Add filters to segment your audience into the group of contacts you'd like
    to add to a list.
  </Step>

  <Step title="Add contacts to a list">
    Click the `•••` menu icon on the far right-hand side of the audience filters,
    select **Add to mailing list** and then select the list(s) you want to add the contacts to.
    ![Add to list](https://mintlify.s3.us-west-1.amazonaws.com/loops/images/mailing-lists/bulk-assign-to-lists.png)
  </Step>
</Steps>

### Upload a CSV to a list

If you want to import contacts to a list in bulk you can use our [CSV importer](/add-users/csv-upload).

In the final stage of the form you can select a list, which will add all contacts (new or existing) in the CSV file to that list.

![](https://mintlify.s3.us-west-1.amazonaws.com/loops/images/mailing-lists/csv-upload.png)

### Add contacts to lists with the API

Utilizing the [Loops API](/api-reference) you can programmatically add and remove contacts to and from Lists.

When creating a contact, updating a contact, or sending in an event with the API, you can include a `mailingLists` object in the payload.

This `mailingLists` object is a key-value pair of list IDs and a subscription status. The subscription status can be `true` or `false`.

```json
{
  "email": "loopy-loop@example.com",
  "mailingLists": {
    "cm06f5v0e45nf0ml5754o9cix": true,
    "cm16k73gq014h0mmj5b6jdi9r": false
  }
}
```

In this example, the contact would be subscribed to `cm06f5v0e45nf0ml5754o9cix` and unsubscribed from `cm16k73gq014h0mmj5b6jdi9r`.

Mailing list IDs can be found [in the app](https://app.loops.so/settings?page=lists) (click the ID to add it to your clipboard) or by using the [API](/api-reference/list-mailing-lists).

![Visibility toggle](https://mintlify.s3.us-west-1.amazonaws.com/loops/images/mailing-lists/lists-toggle.png)

### Add contacts to lists with forms

If you use a [form](/forms/simple-form) on your website you can subscribe contacts to specific lists.

When exporting HTML from the [Forms page](https://app.loops.so/forms) in Loops, choose a list from the **Settings** tab.

![Select a list from the form settings](https://mintlify.s3.us-west-1.amazonaws.com/loops/images/mailing-lists/form-settings.png)

<Note>
  Adding contacts to a list via a form only works with public lists. The option
  to select a list will only appear in the form settings if you have at least
  one public list.
</Note>

If you already have a form in place or are using a [custom form](/forms/custom-form) you can add a `mailingLists` parameter to the form body with the value a comma-separated list of mailing list IDs.

<CodeGroup>
  ```html HTML example {3}
  <form>
    <input type="email" name="email" required />
    <input type="hidden" name="mailingLists" value="cm06f5v0e45nf0ml5754o9cix,cm16k73gq014h0mmj5b6jdi9r" />
  </form>
  ```

  ```javascript JavaScript example {4}
  fetch(formEndpointUrl, {
    method: "POST",
    body:
      "mailingLists=cm06f5v0e45nf0ml5754o9cix,cm16k73gq014h0mmj5b6jdi9r" +
      "&email=" + encodeURIComponent(emailInput.value),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  ```
</CodeGroup>


