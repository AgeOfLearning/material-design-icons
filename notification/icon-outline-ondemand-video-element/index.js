import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineOndemandVideoElement
 * @class IconOutlineOndemandVideoElement
 * @extends {AoflElement}
 */
class IconOutlineOndemandVideoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineOndemandVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-ondemand-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineOndemandVideoElement.is, IconOutlineOndemandVideoElement);

export default IconOutlineOndemandVideoElement;
