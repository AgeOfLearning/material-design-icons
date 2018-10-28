import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpScheduleElement
 * @class IconSharpScheduleElement
 * @extends {AoflElement}
 */
class IconSharpScheduleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpScheduleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-schedule';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpScheduleElement.is, IconSharpScheduleElement);

export default IconSharpScheduleElement;
