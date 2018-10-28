import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePermMediaElement
 * @class IconOutlinePermMediaElement
 * @extends {AoflElement}
 */
class IconOutlinePermMediaElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePermMediaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-perm-media';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePermMediaElement.is, IconOutlinePermMediaElement);

export default IconOutlinePermMediaElement;
