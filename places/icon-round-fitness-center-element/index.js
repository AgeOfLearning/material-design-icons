import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFitnessCenterElement
 * @class IconRoundFitnessCenterElement
 * @extends {AoflElement}
 */
class IconRoundFitnessCenterElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFitnessCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-fitness-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFitnessCenterElement.is, IconRoundFitnessCenterElement);

export default IconRoundFitnessCenterElement;
