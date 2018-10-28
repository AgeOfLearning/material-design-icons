import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSubdirectoryArrowLeftElement
 * @class IconRoundSubdirectoryArrowLeftElement
 * @extends {AoflElement}
 */
class IconRoundSubdirectoryArrowLeftElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSubdirectoryArrowLeftElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-subdirectory-arrow-left';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSubdirectoryArrowLeftElement.is, IconRoundSubdirectoryArrowLeftElement);

export default IconRoundSubdirectoryArrowLeftElement;
