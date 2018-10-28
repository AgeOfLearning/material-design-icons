import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePanoramaWideAngleElement
 * @class IconOutlinePanoramaWideAngleElement
 * @extends {AoflElement}
 */
class IconOutlinePanoramaWideAngleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePanoramaWideAngleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-panorama-wide-angle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePanoramaWideAngleElement.is, IconOutlinePanoramaWideAngleElement);

export default IconOutlinePanoramaWideAngleElement;
