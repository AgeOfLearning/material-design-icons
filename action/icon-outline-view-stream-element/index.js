import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineViewStreamElement
 * @class IconOutlineViewStreamElement
 * @extends {AoflElement}
 */
class IconOutlineViewStreamElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineViewStreamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-view-stream';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineViewStreamElement.is, IconOutlineViewStreamElement);

export default IconOutlineViewStreamElement;
