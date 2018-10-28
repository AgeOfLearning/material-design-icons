import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpChangeHistoryElement
 * @class IconSharpChangeHistoryElement
 * @extends {AoflElement}
 */
class IconSharpChangeHistoryElement extends AoflElement {
  /**
   * Creates an instance of IconSharpChangeHistoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-change-history';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpChangeHistoryElement.is, IconSharpChangeHistoryElement);

export default IconSharpChangeHistoryElement;
