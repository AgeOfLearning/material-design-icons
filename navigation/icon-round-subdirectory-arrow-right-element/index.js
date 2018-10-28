import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSubdirectoryArrowRightElement
 * @class IconRoundSubdirectoryArrowRightElement
 * @extends {AoflElement}
 */
class IconRoundSubdirectoryArrowRightElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSubdirectoryArrowRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-subdirectory-arrow-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSubdirectoryArrowRightElement.is, IconRoundSubdirectoryArrowRightElement);

export default IconRoundSubdirectoryArrowRightElement;
