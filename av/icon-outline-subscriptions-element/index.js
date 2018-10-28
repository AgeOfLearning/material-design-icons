import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSubscriptionsElement
 * @class IconOutlineSubscriptionsElement
 * @extends {AoflElement}
 */
class IconOutlineSubscriptionsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSubscriptionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-subscriptions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSubscriptionsElement.is, IconOutlineSubscriptionsElement);

export default IconOutlineSubscriptionsElement;
