import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineEqualizerElement
 * @class IconOutlineEqualizerElement
 * @extends {AoflElement}
 */
class IconOutlineEqualizerElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineEqualizerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-equalizer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineEqualizerElement.is, IconOutlineEqualizerElement);

export default IconOutlineEqualizerElement;
