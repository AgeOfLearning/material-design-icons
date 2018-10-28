import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFitnessCenterElement
 * @class IconOutlineFitnessCenterElement
 * @extends {AoflElement}
 */
class IconOutlineFitnessCenterElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFitnessCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-fitness-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFitnessCenterElement.is, IconOutlineFitnessCenterElement);

export default IconOutlineFitnessCenterElement;
