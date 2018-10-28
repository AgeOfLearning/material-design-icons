import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePanoramaElement
 * @class IconOutlinePanoramaElement
 * @extends {AoflElement}
 */
class IconOutlinePanoramaElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePanoramaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-panorama';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePanoramaElement.is, IconOutlinePanoramaElement);

export default IconOutlinePanoramaElement;
