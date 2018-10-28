import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFitnessCenterElement
 * @class IconTwotoneFitnessCenterElement
 * @extends {AoflElement}
 */
class IconTwotoneFitnessCenterElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFitnessCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-fitness-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFitnessCenterElement.is, IconTwotoneFitnessCenterElement);

export default IconTwotoneFitnessCenterElement;
