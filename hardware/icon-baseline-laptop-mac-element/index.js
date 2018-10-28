import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLaptopMacElement
 * @class IconBaselineLaptopMacElement
 * @extends {AoflElement}
 */
class IconBaselineLaptopMacElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLaptopMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-laptop-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLaptopMacElement.is, IconBaselineLaptopMacElement);

export default IconBaselineLaptopMacElement;
