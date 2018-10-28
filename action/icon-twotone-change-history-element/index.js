import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneChangeHistoryElement
 * @class IconTwotoneChangeHistoryElement
 * @extends {AoflElement}
 */
class IconTwotoneChangeHistoryElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneChangeHistoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-change-history';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneChangeHistoryElement.is, IconTwotoneChangeHistoryElement);

export default IconTwotoneChangeHistoryElement;
