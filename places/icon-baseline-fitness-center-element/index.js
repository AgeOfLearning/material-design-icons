import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFitnessCenterElement
 * @class IconBaselineFitnessCenterElement
 * @extends {AoflElement}
 */
class IconBaselineFitnessCenterElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFitnessCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-fitness-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFitnessCenterElement.is, IconBaselineFitnessCenterElement);

export default IconBaselineFitnessCenterElement;
