import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTimelapseElement
 * @class IconOutlineTimelapseElement
 * @extends {AoflElement}
 */
class IconOutlineTimelapseElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTimelapseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-timelapse';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTimelapseElement.is, IconOutlineTimelapseElement);

export default IconOutlineTimelapseElement;
