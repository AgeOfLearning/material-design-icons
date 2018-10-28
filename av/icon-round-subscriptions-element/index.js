import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSubscriptionsElement
 * @class IconRoundSubscriptionsElement
 * @extends {AoflElement}
 */
class IconRoundSubscriptionsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSubscriptionsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-subscriptions';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSubscriptionsElement.is, IconRoundSubscriptionsElement);

export default IconRoundSubscriptionsElement;
