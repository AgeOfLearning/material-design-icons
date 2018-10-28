import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDirectionsWalkElement
 * @class IconSharpDirectionsWalkElement
 * @extends {AoflElement}
 */
class IconSharpDirectionsWalkElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDirectionsWalkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-directions-walk';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDirectionsWalkElement.is, IconSharpDirectionsWalkElement);

export default IconSharpDirectionsWalkElement;
