import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTonalityElement
 * @class IconTwotoneTonalityElement
 * @extends {AoflElement}
 */
class IconTwotoneTonalityElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTonalityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-tonality';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTonalityElement.is, IconTwotoneTonalityElement);

export default IconTwotoneTonalityElement;
