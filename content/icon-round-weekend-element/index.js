import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWeekendElement
 * @class IconRoundWeekendElement
 * @extends {AoflElement}
 */
class IconRoundWeekendElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWeekendElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-weekend';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWeekendElement.is, IconRoundWeekendElement);

export default IconRoundWeekendElement;
