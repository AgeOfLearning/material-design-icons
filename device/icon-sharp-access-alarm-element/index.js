import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAccessAlarmElement
 * @class IconSharpAccessAlarmElement
 * @extends {AoflElement}
 */
class IconSharpAccessAlarmElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAccessAlarmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-access-alarm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAccessAlarmElement.is, IconSharpAccessAlarmElement);

export default IconSharpAccessAlarmElement;
