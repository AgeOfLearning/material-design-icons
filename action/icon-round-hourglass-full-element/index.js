import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHourglassFullElement
 * @class IconRoundHourglassFullElement
 * @extends {AoflElement}
 */
class IconRoundHourglassFullElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHourglassFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-hourglass-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHourglassFullElement.is, IconRoundHourglassFullElement);

export default IconRoundHourglassFullElement;
