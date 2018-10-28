import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWavesElement
 * @class IconOutlineWavesElement
 * @extends {AoflElement}
 */
class IconOutlineWavesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWavesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-waves';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWavesElement.is, IconOutlineWavesElement);

export default IconOutlineWavesElement;
