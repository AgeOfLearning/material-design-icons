import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHourglassFullElement
 * @class IconSharpHourglassFullElement
 * @extends {AoflElement}
 */
class IconSharpHourglassFullElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHourglassFullElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-hourglass-full';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHourglassFullElement.is, IconSharpHourglassFullElement);

export default IconSharpHourglassFullElement;
