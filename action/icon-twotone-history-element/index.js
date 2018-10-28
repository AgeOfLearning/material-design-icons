import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHistoryElement
 * @class IconTwotoneHistoryElement
 * @extends {AoflElement}
 */
class IconTwotoneHistoryElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHistoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-history';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHistoryElement.is, IconTwotoneHistoryElement);

export default IconTwotoneHistoryElement;
