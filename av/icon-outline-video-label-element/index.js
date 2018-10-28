import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVideoLabelElement
 * @class IconOutlineVideoLabelElement
 * @extends {AoflElement}
 */
class IconOutlineVideoLabelElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVideoLabelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-video-label';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVideoLabelElement.is, IconOutlineVideoLabelElement);

export default IconOutlineVideoLabelElement;
