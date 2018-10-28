import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineChangeHistoryElement
 * @class IconOutlineChangeHistoryElement
 * @extends {AoflElement}
 */
class IconOutlineChangeHistoryElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineChangeHistoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-change-history';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineChangeHistoryElement.is, IconOutlineChangeHistoryElement);

export default IconOutlineChangeHistoryElement;
