import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHistoryElement
 * @class IconSharpHistoryElement
 * @extends {AoflElement}
 */
class IconSharpHistoryElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHistoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-history';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHistoryElement.is, IconSharpHistoryElement);

export default IconSharpHistoryElement;
