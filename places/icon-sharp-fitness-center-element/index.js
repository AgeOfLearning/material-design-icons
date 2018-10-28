import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFitnessCenterElement
 * @class IconSharpFitnessCenterElement
 * @extends {AoflElement}
 */
class IconSharpFitnessCenterElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFitnessCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-fitness-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFitnessCenterElement.is, IconSharpFitnessCenterElement);

export default IconSharpFitnessCenterElement;
