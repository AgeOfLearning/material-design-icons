import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHourglassEmptyElement
 * @class IconSharpHourglassEmptyElement
 * @extends {AoflElement}
 */
class IconSharpHourglassEmptyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHourglassEmptyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-hourglass-empty';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHourglassEmptyElement.is, IconSharpHourglassEmptyElement);

export default IconSharpHourglassEmptyElement;
