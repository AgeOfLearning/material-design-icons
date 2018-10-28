import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTonalityElement
 * @class IconOutlineTonalityElement
 * @extends {AoflElement}
 */
class IconOutlineTonalityElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTonalityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-tonality';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTonalityElement.is, IconOutlineTonalityElement);

export default IconOutlineTonalityElement;
