import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVideoCallElement
 * @class IconOutlineVideoCallElement
 * @extends {AoflElement}
 */
class IconOutlineVideoCallElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVideoCallElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-video-call';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVideoCallElement.is, IconOutlineVideoCallElement);

export default IconOutlineVideoCallElement;
