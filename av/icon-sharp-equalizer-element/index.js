import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpEqualizerElement
 * @class IconSharpEqualizerElement
 * @extends {AoflElement}
 */
class IconSharpEqualizerElement extends AoflElement {
  /**
   * Creates an instance of IconSharpEqualizerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-equalizer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpEqualizerElement.is, IconSharpEqualizerElement);

export default IconSharpEqualizerElement;
