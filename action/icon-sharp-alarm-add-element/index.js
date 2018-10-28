import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpAlarmAddElement
 * @class IconSharpAlarmAddElement
 * @extends {AoflElement}
 */
class IconSharpAlarmAddElement extends AoflElement {
  /**
   * Creates an instance of IconSharpAlarmAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-alarm-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpAlarmAddElement.is, IconSharpAlarmAddElement);

export default IconSharpAlarmAddElement;
