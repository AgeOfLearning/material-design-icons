import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPermMediaElement
 * @class IconSharpPermMediaElement
 * @extends {AoflElement}
 */
class IconSharpPermMediaElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPermMediaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-perm-media';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPermMediaElement.is, IconSharpPermMediaElement);

export default IconSharpPermMediaElement;
