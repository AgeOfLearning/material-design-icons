import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneOndemandVideoElement
 * @class IconTwotoneOndemandVideoElement
 * @extends {AoflElement}
 */
class IconTwotoneOndemandVideoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneOndemandVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-ondemand-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneOndemandVideoElement.is, IconTwotoneOndemandVideoElement);

export default IconTwotoneOndemandVideoElement;
