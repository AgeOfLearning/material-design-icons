import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTonalityElement
 * @class IconBaselineTonalityElement
 * @extends {AoflElement}
 */
class IconBaselineTonalityElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTonalityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-tonality';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTonalityElement.is, IconBaselineTonalityElement);

export default IconBaselineTonalityElement;
