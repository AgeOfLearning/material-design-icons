import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePetsElement
 * @class IconBaselinePetsElement
 * @extends {AoflElement}
 */
class IconBaselinePetsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePetsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-pets';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePetsElement.is, IconBaselinePetsElement);

export default IconBaselinePetsElement;
