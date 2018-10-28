import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHistoryElement
 * @class IconOutlineHistoryElement
 * @extends {AoflElement}
 */
class IconOutlineHistoryElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHistoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-history';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHistoryElement.is, IconOutlineHistoryElement);

export default IconOutlineHistoryElement;
