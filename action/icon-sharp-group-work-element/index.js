import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGroupWorkElement
 * @class IconSharpGroupWorkElement
 * @extends {AoflElement}
 */
class IconSharpGroupWorkElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGroupWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-group-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGroupWorkElement.is, IconSharpGroupWorkElement);

export default IconSharpGroupWorkElement;
