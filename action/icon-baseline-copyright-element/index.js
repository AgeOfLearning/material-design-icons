import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCopyrightElement
 * @class IconBaselineCopyrightElement
 * @extends {AoflElement}
 */
class IconBaselineCopyrightElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCopyrightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-copyright';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCopyrightElement.is, IconBaselineCopyrightElement);

export default IconBaselineCopyrightElement;
