import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineControlPointElement
 * @class IconOutlineControlPointElement
 * @extends {AoflElement}
 */
class IconOutlineControlPointElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineControlPointElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-control-point';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineControlPointElement.is, IconOutlineControlPointElement);

export default IconOutlineControlPointElement;
