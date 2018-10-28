import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineGroupWorkElement
 * @class IconOutlineGroupWorkElement
 * @extends {AoflElement}
 */
class IconOutlineGroupWorkElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineGroupWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-group-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineGroupWorkElement.is, IconOutlineGroupWorkElement);

export default IconOutlineGroupWorkElement;
