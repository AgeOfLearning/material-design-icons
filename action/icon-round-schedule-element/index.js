import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundScheduleElement
 * @class IconRoundScheduleElement
 * @extends {AoflElement}
 */
class IconRoundScheduleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundScheduleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-schedule';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundScheduleElement.is, IconRoundScheduleElement);

export default IconRoundScheduleElement;
