import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCastConnectedElement
 * @class IconBaselineCastConnectedElement
 * @extends {AoflElement}
 */
class IconBaselineCastConnectedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCastConnectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cast-connected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCastConnectedElement.is, IconBaselineCastConnectedElement);

export default IconBaselineCastConnectedElement;
