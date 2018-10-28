import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHourglassEmptyElement
 * @class IconRoundHourglassEmptyElement
 * @extends {AoflElement}
 */
class IconRoundHourglassEmptyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHourglassEmptyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-hourglass-empty';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHourglassEmptyElement.is, IconRoundHourglassEmptyElement);

export default IconRoundHourglassEmptyElement;
