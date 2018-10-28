import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpOndemandVideoElement
 * @class IconSharpOndemandVideoElement
 * @extends {AoflElement}
 */
class IconSharpOndemandVideoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpOndemandVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-ondemand-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpOndemandVideoElement.is, IconSharpOndemandVideoElement);

export default IconSharpOndemandVideoElement;
